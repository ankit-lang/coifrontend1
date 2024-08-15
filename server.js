import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs/promises";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 5000;
app.use(cors());

app.post("/save", express.json(), (req, res) => {
  const { formData } = req.body;
  let data = formData;
  data = JSON.stringify(data);

  if (typeof data !== "string") {
    return res
      .status(402)
      .json({ message: "Invalid data type. Expected a string." });
  }
  const filePath = path.join(__dirname, "data", "client.txt");
  if (!existsSync(filePath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
  fs.appendFile(filePath, data, (err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to save data" });
    }
    res.status(200).json({ message: "Data saved successfully" });
  });
  res.json({
    message: "Data saved successfully",
  });
});

app.post("/client/edit", express.json(), (req, res) => {
  const { savedData } = req.body;
  if (!savedData) {
    return res.status(400).json({ message: "No data provided" });
  }

 

  const filePath = path.join(__dirname, "data", "client.txt");
  fs.readFile(filePath, "utf8", (err, fileData) => {
    if (err && err.code !== "ENOENT") {
      // Handle file read error
      return res.status(500).json({ message: "Failed to read data" });
    }
    const records = fileData.trim().split(/(?<=})\s*(?={)/g);
    let updated = false;
    const updatedRecords = records.map((recordStr) => {
      try {
        const record = JSON.parse(recordStr);

        // Check if the phone number matches and update the record
        if (record.phone === phone) {
          updated = true;
          return { ...record, ...newData }; // Update the record
        }

        return record;
      } catch (parseError) {
        // Handle JSON parse error
        console.error("Failed to parse record:", parseError);
        // Return original record if parse fails
      }
    });
    if (!updated) {
      return res.status(404).json({ message: "Record not found" });
    }
    const updatedFileData = updatedRecords.map((record) =>
      JSON.stringify(record)
    );
    console.log(updatedFileData)

    // Update the existing data with the new data
    // This example assumes `savedData` is an object that will be added/updated in the array

    // Write the updated data back to the file
    fs.writeFile(filePath, updatedFileData, (writeErr) => {
      if (writeErr) {
        // Handle file write error
        return res.status(500).json({ message: "Failed to save data" });
      }
      res.status(200).json({ message: "Data updated successfully" });
    });
  });
  res.json({
    message: "Data updated successfully",
  });

});

app.get("/data/:id", async (req, res) => {
  const id = req.params.id;
  const filePath = path.join(__dirname, "data", "client.txt");
  if (existsSync(filePath)) {
    const data = await fs.readFile(filePath, "utf8");

    const jsonStrings = data.split("}{").map((str, index, arr) => {
      // Re-add the braces after splitting
      if (index === 0) return str + "}";
      if (index === arr.length - 1) return "{" + str;
      return "{" + str + "}";
    });

    // Parse each JSON string into an object
    const jsonObjects = jsonStrings.map((jsonStr) => JSON.parse(jsonStr));
    const foundObject = jsonObjects.find((obj) => obj.phone == id);

    if (foundObject) {
      return res.status(200).json(foundObject);
    } else {
      return res.status(404).json({ message: "Data not found" });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

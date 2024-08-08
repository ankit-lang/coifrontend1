// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Home','About us','Rules','Complaint Online','Publication','FAQs','Related Links','RTi'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" className='navbar'  >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//             <img src="./CIO_LOGO.jpg" width={'100px'} height={'60px'} alt="" />
       
          

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
              
//               sx={{margin:{left:'20px'},
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
            
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
              
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;

import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-evenly items-center  font-semibold nav">
            <div className="logo w-20 h-12"><img src="CIO_LOGO.jpg" alt="" /></div>
            <div className="">Home</div>
            <div className="">About us</div>
            <div className="">Complaint Online</div>
            <div className="">Publication</div>
            <div className="">FAQs</div>
            <div className="">Grivance Redressal Officiers</div>
            <div className="">Related Links</div>
            <div className="">RTI</div>

        </div>
        <div className="home flex    ">
               
               <div className="flex">
                <div className="flex-1 w-1/2 p-11"><img className=' ' src="./MainPgImg.jpg" alt="" /></div>
               <div className="flex-1 w-1/2 p-7"> <img className=' '  src="./VideoThumbnail.jpg" alt="" />
              <div className="flex items-center justify-center text-blue-500">Self-help video for Online registration of complaint</div>
               </div>

   

               </div>

        </div>
      <div className="text-blue-600 ml-10 text-2xl m-3">Advertisement For Hiring Of Office Premises At Thane On Lease Basis Click here</div>
        <div className="flex m-10">
            <div className="w-1/2">
            <div className="font-bold text-2xl text-green-900 ">Council for Insurance Ombudsmen</div> 
            <div className="text-xs">
            The Offices of Insurance Ombudsman are under the administrative control of Council for Insurance Ombudsmen (CIO), which has been constituted under the Insurance Ombudsman Rules, 2017. <br /> <br />

Office of Insurance Ombudsman is an alternate Grievance Redressal platform which has been setup with an aim to resolve grievances of aggrieved policyholders against Insurance Companies and its Intermediaries or Insurance Brokers in a speedy and cost-effective manner
            </div>
            <div className="mt-5 font-bold text-green-800 text-3xl">
            Ways to submit/lodge the complaint
            </div>
            <ul className='ml-2 text-green-800 mt-4'  >
            <li>   <span className='w-5 h-5 inline-block  rounded-full border-x-zinc-500' >◯</span>   Online : click here for registering</li>
                <li>◯ Offline : a) using email, b) via post or c) walk-in to Insurance Ombudsman Office (click here for details) of centres, email id, address and jurisdiction.</li>
                <li>◯ For tracking your complaint click here</li>
            </ul>
            
             </div>
           
            <div className="w-1/2 ml-10  ">
            <div className="text-3xl text-green-800 ">Before you submit your grievance to Insurance Ombudsman:</div>
            <div className="">
            ○ You should have made a complaint to Insurance Company/Insurance Broker
            ○Insurance Company/Insurance Broker has failed to furnish reply to you within a period of one month of your complaint; <br />
OR <br />
You are not satisfied with the response given by Insurance Company/Insurance Broker
The complaint is being made to the Insurance Ombudsman within one year from
(a) Date of rejection of the complaint by the Insurance Company/Insurance Broker
OR
(b) Expiry of one month of filing the complaint if the Insurer fails to reply
The amount of Compensation sought in Insurance Ombudsman should not exceed Rs. 50 Lakhs.
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
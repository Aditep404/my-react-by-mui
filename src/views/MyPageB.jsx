import React from 'react'
import {AppBar,Toolbar,Box, Typography,Avatar,Rating, TextField, FormControl, Radio, RadioGroup, FormControlLabel, Button} from '@mui/material'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import BB from '../assets/bb.jpg'
import GG from '../assets/gs.jpg'
import TT from '../assets/TT.png'
export default function MyPageB() {
return (
    <>
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <FlightTakeoffIcon sx={{scale:'1.5',color:'red'}}/>
                    <Typography sx={{ml:2,color:'yellow',fontWeight:'bold',fontSize:'20px',mr:'auto'}}>RORO Profile</Typography>
                    <Typography sx={{mr:2}}>Aditep Visaso</Typography>
                
                <Avatar alt="monney" src={GG} variant="rounded"/>
        </Toolbar>
        </AppBar>
        </Box>

        <Box sx={{mt:2,display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Avatar alt="monney" src={GG} variant="rounded"
            sx={{width: 200, height: 200,mx:'auto',mt:'10px',border:'5px solid #ff0000',p:1}}></Avatar>
        <Typography sx={{mt:2,fontSize:'30px',fontWeight:'bold'}}>
            อดิเทพ วิเสโส
        </Typography>
        <Typography sx={{fontSize:'20px',color:'#abc515'}}>
            ID: 6419410020
        </Typography>
        </Box>

        <Box sx={{mt:2,display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <Avatar src={TT}/>
            <Avatar src={BB} sx={{mx:2}}/>
            <Avatar src={GG}/>
        </Box>

        <Box sx={{mt:2,display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <Rating size='large'/>
        </Box>

        <Box sx={{mt:5,width:'75%',mx:'auto',boxShadow:3,p:2,display:'flex',flexDirection:'column'}}>
            <Typography>ชื่อ-สกุล</Typography>
            <TextField size='small'/>
            <Box sx={{height:'10px'}}/>
                <Typography>เบอร์โทร</Typography>
                <TextField size='small'/>
            <Box sx={{mt:2}}/>
            <Typography>เพศ</Typography>
            <FormControl>
                <RadioGroup row>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="LGBTQ+" control={<Radio />} label="LGBTQ+" />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" size='Large' sx={{mt:2,backgroundColor:'#ff0000'}}>HELLO</Button>
            <Button variant="outlined" size='Large' sx={{mt:2, borderColor:'#ff0000',color:'#ff0000'}}>ตกลง</Button>
        </Box>

        <Box sx={{height:'100px'}}/>
    </>
)
}
import React from 'react'
import {} from '@mui/material'
import Typography from '@mui/material/Typography'

export default function MyPageA() {
return (
    <>
    <div>
        <h1>สวัสดีชาวโลก Hello,WowId!</h1>
    </div>
    <Typography variant="h1">สวัสดีชาวโลก Hello,WowId</Typography>
    <hr />
    <div style={{ color: 'red' , fontSize: '40px',marginLeft: '100px'}}>
        สวัสดี SAU
    </div>
    <Typography sx={{ color: 'red' , fontSize: '40px',ml: '100px' }}>สวัสดี SAU</Typography>
    </>
)
}
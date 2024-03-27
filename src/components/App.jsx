import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Actors, Movies, Profile, MovieInfromation, NavBar} from './'
import useStyles from './styles'

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar/>
            <main className={classes.content}>
            <div className={classes.toolbar} />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Movies/>}>
                    </Route>
                    <Route  path='/movie/:id' element={<MovieInfromation/>}>
                    </Route>
                    <Route  path='/actors/:id' element={<Actors/>}>
                       
                    </Route>
                    <Route  path='/profile/:id' element={<Profile/>} >
                       
                    </Route>
                </Routes>
                </BrowserRouter>
            </main>
        </div>
    )
}

export default App

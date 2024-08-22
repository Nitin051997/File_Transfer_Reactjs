import { LinearProgress } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../Error/PageNotFound'
import LogIn from '../HomePage/LogIn'
import UserCrtLogIn from '../HomePage/UserCrtLogIn'
import HomeBoard from '../AppPage/HomeBoard'
import { useSelector } from 'react-redux'
import AppNavBar from '../AppPage/AppNavBar'
import ListUserFIles from '../FileList/ListUserFIles'
import Uploader from '../Upload/Uploader'
import Downloader from '../Download/Downloader'
import ListUserPaper from '../PaperList/ListUserPaper'
import ConfigPaperList from '../PaperList/Conf/ConfigPaperList'
import FormStructure from '../Form/FormStructure'
import FormConfigurationScreen from '../FormConfiguration/FormConfigurationScreen'


const Lander = () => {

    const [loadBar,setLoadBar] = useState(false)

    const ValidationReducer = useSelector((state) => state.ValidationReducer)

  return (
    <>
    {loadBar ? <LinearProgress color={ValidationReducer ? 'warning' : 'primary'}/> : <></>}
    {ValidationReducer ? <AppNavBar setLoadBar={setLoadBar}/> : <></>}
      <Routes>
        <Route path='/developer' element={<><p>Developer Page!</p><FormStructure/></>}/>
        <Route path='/' element={<LogIn setLoadBar={setLoadBar}/>}/>
        <Route path='/createUser' element={<UserCrtLogIn setLoadBar={setLoadBar}/>}/>
        <Route path='/Home' element={!ValidationReducer ? <PageNotFound/> : <HomeBoard/>}/>
        <Route path='/fileuploader' element={!ValidationReducer ? <PageNotFound/> : <Uploader setLoadBar={setLoadBar}/>}/>
        <Route path='/fileList' element={!ValidationReducer ? <PageNotFound/> : <ListUserFIles setLoadBar={setLoadBar}/>}/>
        <Route path='/fileDownloader' element={!ValidationReducer ? <PageNotFound/> : <Downloader setLoadBar={setLoadBar}/>}/>
        <Route path='/paperList' element={!ValidationReducer ? <PageNotFound/> : <ListUserPaper setLoadBar={setLoadBar}/>}/>
        <Route path='/paperCreate' element={!ValidationReducer ? <PageNotFound/> : <ConfigPaperList setLoadBar={setLoadBar}/>}/>
        <Route path='/formConfigurationScreen' element={!ValidationReducer ? <PageNotFound/> : <FormConfigurationScreen setLoadBar={setLoadBar}/>}/>
      </Routes>
    </>
  )
}

export default Lander
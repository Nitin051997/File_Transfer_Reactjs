import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Badge, Button } from '@mui/material';
import { Edit, MoreVert, Send } from '@mui/icons-material';
import NoDataFound from '../Error/NoDataFound';
import FetchingData from '../Error/FetchingData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PaperConfScreenAction } from '../Redux/Actions/PaperConfScreeAction';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    maxWidth: '100vw',
  }));

  export default function PaperList({ paperData, filterData, setLoadBar }) {

    const [fetching,setFetching] = React.useState(true)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const hanldeFormConfigurationScreen = (paperId, paperName) => {

        let paperDetails = [{paperId: paperId, paperName: paperName}]

        if(paperId != '' && paperName != ''){
            
            dispatch(PaperConfScreenAction(paperDetails))

            setLoadBar(true)
            setTimeout(() => {
              setLoadBar(false)
              navigate('/formConfigurationScreen')
            }, 800);

        }else{

            console.log({"error": "404! Erroe Occured."});

        }

      }

    React.useEffect(() => {
        setTimeout(() => {
          setFetching(false)
        }, 2000)
      },[paperData])

  return (<>
    {!paperData || [...paperData].length == 0 ? <><NoDataFound/></> 
      : <>{fetching ? <><FetchingData fetching={fetching}/></> 
              : <>
                  <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, width: '90vw' }}>
                    {[...paperData].sort((a,b) => parseInt(b.syspaperid) - parseInt(a.syspaperid)).filter((fil) => {
                        return JSON.stringify(fil.papername).includes(filterData) || JSON.stringify(fil.papertype).includes(filterData) || JSON.stringify(fil.paperorg).includes(filterData) || JSON.stringify(fil.paperactive).includes(filterData)
                    }).map((res) => {
                        return <>
                        <Item sx={{ my: 1, mx: 'auto', p: 2,}}>
                          <Stack spacing={2} direction="row" alignItems="left">
                            <img src={process.env.PUBLIC_URL + `/paper.png`} alt='file'/>
                            <div style={{width: '40vw', paddingLeft: '2vh'}}>
                              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }} noWrap>Paper Name: {res.papername}</Typography>
                              <Typography noWrap>{res.paperid}</Typography>
                            </div>
                            <div style={{width: '15vw'}}>
                              <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} noWrap>Type:</Typography>
                              <Typography noWrap sx={{ textAlign: 'center' }}>{res.papertype}</Typography>
                            </div>
                            <div style={{width: '15vw'}}>
                              <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} noWrap>Created On:</Typography>
                              <Typography noWrap sx={{ textAlign: 'center' }}>{res.date}</Typography>
                            </div>
                            <div style={{width: '15vw'}}>
                              <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} noWrap>Organization:</Typography>
                              <Typography noWrap sx={{ textAlign: 'center' }}>{res.paperorg}</Typography>
                            </div>
                            <div style={{width: '15vw'}}>
                              <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} noWrap>Status:</Typography>
                              <Typography noWrap sx={{ textAlign: 'center' }}>{res.paperactive}</Typography>
                            </div>
                            <Button onClick={() => {hanldeFormConfigurationScreen(res.paperid, res.papername)}} endIcon={<Edit />} color="success">Edit</Button>
                            <div style={{paddingTop: '2vh'}}>
                              <MoreVert />
                            </div>
                          </Stack>
                        </Item>
                        </>
                    })}
                  </Box>
                  </>}
      </>}
    </>);
}

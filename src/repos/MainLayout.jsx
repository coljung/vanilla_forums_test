import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import SortOptions from './SortOptions.jsx';
import CardList from './CardList.jsx';

const Alert = (props) =>  <MuiAlert elevation={6} variant="filled" {...props} />;

const MainLayout = () => {
  //Input Value
  const [searchValue, setValue] = useState('');
  //Title State
  const [userTitle, setUserTitle] = useState('');
  //Repo JSON Data
  const [reposData, setRepos] = useState([]);
  //Repo JSON Data ordered by Stars
  const [repoStarOrder, setRepoByStars] = useState(reposData);
  //Snackbar state
  const [open, setOpen] = useState(false);
  //Snackbar snackMessage
  const [snackMessage, setMessage] = useState('Warning!');
  //Sort State
  const [sortGrid, setSort] = useState('alpha');
  //Submit Form + retrieve JSON, simple Fetch call
  const handleSubmit = (e) => {
    e.preventDefault();
    setRepos([]);
    if (!searchValue.length) {
      setMessage('Please Enter a valid username');
      setOpen(true);
      return false;
    }
    const urlRequestRepos = `https://api.github.com/users/${searchValue}/repos`;
    fetch(urlRequestRepos)
      .then((res) => {

          if (res.ok) {
            //display username once response is ok
            setUserTitle(searchValue);
            return res.json()
          } else if(res.status === 404) {
            return Promise.reject('User not found')
          } else {
            return Promise.reject('Some other error: ' + res.status)
          }

      })
      .then((repos) => {
        setRepos(repos);
        //quick array copy
        const orderedByStars = JSON.parse(JSON.stringify(repos));
        setRepoByStars(orderedByStars.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1))
      })
      .catch((err) => {
        //show snackbar
        setMessage(err);
        setOpen(true);
      });
   }

   //Snackbar functions
   const handleClose = (event, reason) => {
     if (reason === 'clickaway') {
       return;
     }
     setOpen(false);
   };

   const handleSort = (event, newAlignment) => {
     setSort(newAlignment);
   };
  return (
    <div style={{ padding: '0 50px' }}>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="username" label="Search Github Users" value={searchValue} onChange={e => setValue(e.target.value)} />
            <Button type="submit" variant="contained" color="primary" style={{ margin: '10px 0 0 20px' }}>Search</Button>
          </form>
        </Grid>
      </Grid>

      {!!reposData.length  &&
        <div>
          <h2 className='list-head'>Available Public Repositories for: {userTitle}</h2>
          <SortOptions onToggle={handleSort} initialValue={sortGrid} />
          <CardList repoList={sortGrid === 'alpha' ? reposData : repoStarOrder} repoListByStars={repoStarOrder} />
        </div>
      }

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{horizontal:"center", vertical: "top"}}>
        <Alert onClose={handleClose} severity="warning">
          {snackMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MainLayout;


// <CardList repoList={sortGrid === 'alpha' ? reposData : repoStarOrder} repoListByStars={repoStarOrder} />

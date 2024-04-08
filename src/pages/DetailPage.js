import { useEffect, useState, React } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {getFirstFileName, getFileCount, getLanguages, getForksByOldest, getFiles } from '../helpers/Helper';
import '../assets/DetailPage.css';
import {getForksByGistId} from '../services/GistServices'

const DetailPage = () => {
    const location = useLocation();
    const gist = location.state;
    const [forks, setForks] = useState([]);


    const loadForks = async () => {
      const data = await getForksByGistId(gist.id);   
      setForks(data);
    }

    useEffect(() => {       
      loadForks();
    }, []);


  return (
    <>
      <header>
        <h1>Gist Viewer - Detail Page</h1>
      </header>
      <div className='Container'> 
            <ul>
                <li>Gist ID: {gist.id}</li>
                <li>Filename of the first file: {getFirstFileName(gist)}</li>
                <li>Description: {gist.description}</li>
                <li>Number of files: {getFileCount(gist)}</li>                                
                <li># times forked: {forks.length}</li>
                <li>Three oldest forks: {getForksByOldest(forks, 3)}</li>
                <li>Languages: {getLanguages(gist)}</li>
                <li>Files in the gist: {getFiles(gist)}</li>
            </ul>

      </div>

      <Link to={'..'}>Back</Link>
    </>
  );
}

export default DetailPage;
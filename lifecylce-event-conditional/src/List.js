import React from 'react';
const List =(props) =>{
    const {repos} = props;
    if (!repos) return null;
    if(!repos.length) return <p>No repos yet</p>
    return (
        <div>
            <ul>
                {
                    repos.map(repo=><li key ={repo.id}>repo.full_name</li>)
                }
            </ul>
        </div>
    )
}

export default List
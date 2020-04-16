import React from 'react';

export default ({posts}) => {
  if (!posts.length){
    return <button className="btn btn-primary">загрузить</button>
  }
  return (
    <div>
      <h1>Fetched Posts</h1>
    </div>
  )
}
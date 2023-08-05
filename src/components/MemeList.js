import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchMemes } from '../actions/memeActions';

const MemeList = ({ memes, loading, error, fetchMemes }) => {
useEffect(() => {
    fetchMemes();
}, [fetchMemes]);

if (loading) {
    return <div>LOADING...</div>;
}

if (error) {
    return <div> ERROR: {error} </div>
}

return (
    <div>
        <h2>MEMES</h2>
        <div className='meme-container'>
        {memes.map((meme) => (
          <div key={meme.id} className="meme">
            <img src={meme.url} alt={meme.name} />
            <p>{meme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    memes: state.memes.memes,
    loading: state.memes.loading,
    error: state.memes.error,
  });
  
  export default connect(mapStateToProps, { fetchMemes })(MemeList);
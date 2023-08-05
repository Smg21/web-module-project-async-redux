import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMemes } from '../actions/memeActions';

const MemeList = ({ memes, loading, error, fetchMemes }) => {
  const [clickedMemeId, setClickedMemeId] = useState(null);

  useEffect(() => {
    fetchMemes();
  }, [fetchMemes]);

  if (loading) {
    return <div>LOADING...</div>;
  }

  if (error) {
    return <div> ERROR: {error} </div>;
  }

  const handleMemeClick = (memeId) => {
    if (clickedMemeId === memeId) {
      // If the same meme is clicked again, reset the state to null
      setClickedMemeId(null);
    } else {
      // Otherwise, set the clicked meme ID
      setClickedMemeId(memeId);
    }
  };

  return (
    <div>
      <div className='meme-container'>
        {memes.map((meme) => (
          <div
            key={meme.id}
            className={`meme ${clickedMemeId === meme.id ? 'clicked' : ''}`}
            onClick={() => handleMemeClick(meme.id)}
          >
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

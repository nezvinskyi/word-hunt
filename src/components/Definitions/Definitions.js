import './Definitions.css';

const Definitions = ({ word, category, meanings, lightMode }) => {
  console.log('meanings :>> ', meanings);
  return (
    <div className="meanings">
      {meanings[0] && word && category === 'en_US' && (
        <audio
          style={{ backgroundColor: '#fff', borderRadius: 10, height: '20px' }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your Browser doesn't support audio element
        </audio>
      )}

      {word === '' ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map(mean =>
          mean.meanings.map(item =>
            item.definitions.map(def => (
              <div
                key={def.definition}
                className="singleMean"
                style={{
                  backgroundColor: lightMode ? '#3b5360' : 'white',
                  color: lightMode ? 'white' : 'black',
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: 'black', width: '100%' }} />
                {def.example && (
                  <span>
                    <b>Example : </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms.length !== 0 && (
                  <span>
                    <b>Synonyms : </b>
                    {def.synonyms.map(syn => `${syn},`)}
                  </span>
                )}
              </div>
            )),
          ),
        )
      )}
    </div>
  );
};

export default Definitions;

import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="VideoFooter">
          <div className="videoFooter_text">
          <h3>@MatheusRonald19</h3>
          <p>Descrição do Video</p>
          <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter_icon"/>
          <div className="videoFooterMusic_text">
          <p>Titulo da Musica</p>
          </div>
          </div>
          </div>
      <img 
      className="videoFooyer_record"
      alt="Imagem de um vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;

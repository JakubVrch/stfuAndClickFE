import { css } from '@emotion/css'

export default function CopyUrl() {
  return (
    <>
      <div 
        className = {css`
          padding-top: 1rem;
        `}
      >
        Tired? Share url below so friend can click for you!
      </div>
      <input 
          className = {css`
              width: 80%;
          `}
          type="text"
          value={window.location.href}
          onFocus={(event) => event.target.select()}
          readOnly
      />
    </>
  );
}

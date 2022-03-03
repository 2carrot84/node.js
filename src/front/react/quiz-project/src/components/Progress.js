import React from "react";

export function Progress({ page, maxPage }) {
  return (
    <div className="progress">
      <div>
        {page} / {maxPage}
      </div>
      <div className="gauge">
        <span className="fill" style={{width: `${page / maxPage * 100}`}}></span>
      </div>
    </div>
  );
}
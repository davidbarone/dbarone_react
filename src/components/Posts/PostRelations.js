import React, { useState, useEffect } from "react";

const PostRelations = ({ relations }) => {
  return relations && relations.hasRelations ? (
    <div className="navbar">
      <div style={{ margin: "0em 1em" }}>
        {relations.parent && (
          <>
            <h2>Parent</h2>
            <a href={`/posts/${relations.parent.id}`}>
              {relations.parent.title}
            </a>
          </>
        )}
        {Array.isArray(relations.siblings) && !!relations.siblings.length && (
          <>
            <h2>Siblings</h2>
            {relations.siblings.map((value, index) => {
              return (
                <a key={value.id} href={`/posts/${value.id}`}>
                  {value.title}
                </a>
              );
            })}
          </>
        )}

        {Array.isArray(relations.children) && !!relations.children.length && (
          <>
            <h2>Children</h2>
            {relations.children.map((value, index) => {
              return (
                <a key={value.id} href={`/posts/${value.id}`}>
                  {value.title}
                </a>
              );
            })}
          </>
        )}
      </div>
    </div>
  ) : (
    <div />
  );
};

export default PostRelations;

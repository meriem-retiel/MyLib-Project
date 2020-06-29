import React from 'react';
import './ConversationSearch.css';

export default function ConversationSearch() {
    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Rechercher des Messages"
        />
      </div>
    );
}
'use client';
import React, { useRef } from 'react';

interface searchProps {
    w?: string | number;
    onSearch: Function;
}

const SearchBox = (props: searchProps) => {
    const refInput = useRef<HTMLInputElement>(null);
    const handleSubmit = (form: React.SyntheticEvent) => {
        form.preventDefault();
        const keyword = refInput.current?.value;
        props.onSearch(keyword);
    };
    return (
        <form
            className="bg-white rounded px-2 py-1 flex"
            onSubmit={handleSubmit}
            style={{ width: props.w ?? '300px' }}
        >
            <input
                className="bg-transparent flex-grow focus:border-0"
                ref={refInput}
            />
            <button>Search</button>
        </form>
    );
};

export default SearchBox;

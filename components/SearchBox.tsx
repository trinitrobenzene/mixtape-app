'use client';
import React, { useRef } from 'react';
import {Search} from 'react-bootstrap-icons'
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
            className="bg-white rounded-lg px-2 py-1 flex"
            onSubmit={handleSubmit}
            style={{ width: props.w ?? '300px' }}
        >
            <input
                className="bg-transparent flex-grow focus:border-0"
                ref={refInput}
            />
            <button type='submit'>
                <Search size={20} color='gray'/>
            </button>
        </form>
    );
};

export default SearchBox;

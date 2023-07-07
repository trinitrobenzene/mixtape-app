'use client';
import React, { useRef } from 'react';
import { Search } from 'react-bootstrap-icons';
import style from '@/src/styles/header.module.scss';
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
			className={style['search-box']}
			onSubmit={handleSubmit}
		>
			<input
				className={style['search-input']}
				ref={refInput}
				placeholder="What do you want to search..."
			/>
			<button type="submit">
				<Search size={20} color="gray" />
			</button>
		</form>
	);
};

export default SearchBox;

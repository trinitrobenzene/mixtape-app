'use client';
import GetToken from '@/components/Token';
import ImageService from '@/src/redux/services/api/image';
import TrackService from '@/src/redux/services/api/track';
import React, { useState, useEffect } from 'react';
import './style.css';

const Illustration = () => {
	const [imgUrl, setImgUrl] = useState({ preview: '' });
	const [audioUrl, setAudioUrl] = useState({ preview: '' });

	/** Gọi api để lấy ảnh */
	const getAnImage = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODgwODE3NiwiZXhwIjoxNjkzOTkyMTc2fQ.I3kfNDp89UjIc_RXrN4YYcE1xJuSQzsMYZlkWuuihIM';
		ImageService.getById(`64a802e8222f9174fecbef7f`, token)
			.then(resp => resp && setImgUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};

	/** Gọi api để lấy track */
	const getATrack = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODczMjA5OCwiZXhwIjoxNjkzOTE2MDk4fQ.PQhamKRL67JfZY05tCDVFIIAAVPM8_JvlK3hhEaO7II';
		TrackService.getAudioFileById('64a804cd222f9174fecbef88', token)
			.then(resp => resp && setAudioUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};
	console.log(audioUrl);

	/* Xoá hình ảnh khi bị thay đổi để không bị rò rỉ bộ nhớ */
	useEffect(() => {
		return () => URL.revokeObjectURL(imgUrl.preview);
	}, [imgUrl]);

	/* Xoá audio khi bị thay đổi để không bị rò rỉ bộ nhớ */
	useEffect(() => {
		return () => URL.revokeObjectURL(audioUrl.preview);
	}, [audioUrl]);

	return (
		<div>
			<div className="my-4">
				<h1>Illustration</h1>
				<button className="btn btn-link" onClick={getAnImage}>
					Get a Image
				</button>
				<button className="btn btn-link" onClick={getATrack}>
					Get A Song
				</button>
			</div>
			<div className="py-6">
				{imgUrl.preview && <img src={imgUrl.preview} alt="" />}
				{/* Audio sẽ không hiển thị do bị ẩn bởi thuộc tính nào đó
				 * Sửa nếu cần thiết
				 */}
				{audioUrl.preview && (
					<audio id="myaudio" src={audioUrl.preview} controls />
				)}
			</div>
		</div>
	);
};

export default Illustration;

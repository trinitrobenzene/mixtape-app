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
		const token = await GetToken();
		ImageService.getById(`64a5850b77e11b77dc2cc537`, token)
			.then(resp => resp && setImgUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};

	/** Gọi api để lấy track */
	const getATrack = async () => {
		const token = await GetToken();
		TrackService.getById('64a5827877e11b77dc2cc532', token)
			.then(resp => resp && setAudioUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};

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
					<audio id="myaudio" src={audioUrl.preview} autoPlay />
				)}
			</div>
		</div>
	);
};

export default Illustration;

import Track from '@/src/models/Track';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GetToken from '../Token';
import TrackService from '@/src/redux/services/api/track';
import { useRouter } from 'next/navigation';

interface eProps {
	callback: Function;
	files: FileList | undefined;
	setFiles: Function;
}

const Infor = ({ callback, files }: eProps) => {
	const route = useRouter();
	const [tracks, setTracks] = useState<Track>(new Track());
	const [preview, setPreview] = useState<any>();

	useEffect(() => {
		// clear template url image if user change their avatar
		return () => {
			preview && URL.revokeObjectURL(preview.preview);
		};
	}, [preview]);

	const onChange = (e: React.SyntheticEvent) => {
		const { name, value } = e.target as HTMLInputElement;
		if (name === 'isPrivate') {
			setTracks({
				...tracks,
				[name]: value === '1' ? true : false,
			});
		} else setTracks({ ...tracks, [name]: value });
	};

	const onSubmit = async () => {
		const token = await GetToken();
		const body = new FormData();

		body.append('name', tracks.name);
		body.append('trackCover', preview);
		body.append('trackFile', files?.item(0) ?? '');
		body.append('isPrivate', String(tracks.isPrivate));
		body.append('description', tracks.description);
		tracks.author.split(',').forEach(_ => {
			body.append('author', _);
		});

		TrackService.createNewTrack(body, token)
			.then(resp => {
				console.log(resp);
				alert('Thành công!');
				// route.push('/library');
			})
			.catch(err => console.log(err));
	};

	const onChangePreview = (e: React.BaseSyntheticEvent) => {
		const avatar = e.target.files[0];
		avatar.preview = URL.createObjectURL(avatar);
		setPreview(avatar);
	};

	return (
		<div className="col-span-3">
			<h3>More information about your tracks</h3>
			<div>
				<div className="my-6">
					<label>Title (*)</label>
					<input
						value={tracks.name}
						onChange={onChange}
						name="name"
						className="input input-bordered input-sm w-full"
					/>
				</div>
				<div className="my-6">
					<label htmlFor="avatar">Avatar</label>
					{preview && <img src={preview.preview} width={150} />}
					<input
						type="file"
						name="avatar"
						onChange={onChangePreview}
					/>
				</div>
				<div className="my-6">
					<label htmlFor="description">Description</label>
					<textarea
						value={tracks.description}
						onChange={onChange}
						name="description"
						className="textarea textarea-bordered w-full"
					/>
				</div>
				<div className="my-6">
					<p>Privacy</p>
					<div className="text-sm flex">
						<div className="flex gap-3 items-center">
							<label htmlFor="tracks-public">Public</label>
							<input
								type="radio"
								name="isPrivate"
								id="tracks-public"
								value={0}
								defaultChecked={tracks.isPrivate === false}
								onClick={onChange}
							/>
						</div>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<div className="flex gap-3 items-center">
							<label htmlFor="tracks-private">Private</label>
							<input
								type="radio"
								name="isPrivate"
								id="tracks-private"
								value={1}
								defaultChecked={tracks.isPrivate === true}
								onClick={onChange}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-4 justify-end">
				<button className="btn" onClick={() => callback(0)}>
					Cancel
				</button>
				<button onClick={onSubmit} className="btn btn-success">
					Save
				</button>
			</div>
		</div>
	);
};

export default Infor;

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import {
	GeoAlt,
	Briefcase,
	Twitter,
	Pencil,
	Linkedin,
} from 'react-bootstrap-icons';
import st from '@/data-test/avatar1.jpg';
import Image from 'next/image';

const UserWidget = ({ userId, picturePath }: any) => {
	const [user, setUser] = useState(null);
	// const navigate = useNavigate();
	const token = 'useSelector((state) => state.token);';

	/* const getUser = async () => {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUser(data);
    };
  
    useEffect(() => {
      getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
   */
	/* 	if (!user) {
		return null;
	} */

	/* 	const {
		firstName,
		lastName,
		location,
		occupation,
		viewedProfile,
		impressions,
		friends,
	} = user;
 */
	return (
		<div className="flex flex-col divide-y divide-gray-600 box-border p-5 bg-slate-50 rounded-xl">
			{/* FIRST ROW */}
			<div
				className="flex justify-between items-center gap-2 pb-4"
				onClick={() => /* navigate(`/profile/${userId}`) */ console.log()}
			>
				<div className="flex justify-between items-center gap-4">
					{/* <UserImage image={picturePath} /> */}
					<Image
						style={{ objectFit: 'cover', borderRadius: '50%' }}
						width={50}
						height={50}
						alt="user"
						src={st}
					></Image>
					<div className="box-border">
						<div className="font-sans text-slate-600 font-medium hover:bg-gray-100 cursor-pointer">
							{'Son'} {'Tung'}
						</div>
						<div className="font-sans text-gray-400">{155} Followers</div>
					</div>
				</div>
				{/* <ManageAccountsOutlined /> */}
			</div>

			<div className="divide-black"></div>

			{/* SECOND ROW */}
			<div className="py-px px-0">
				<div className="flex items-center gap-4 mb-2">
					<GeoAlt className="text-base" />
					<span className="text-base">{'THANH PHO HCM'}</span>
				</div>
				<div className="flex items-center gap-4">
					<Briefcase className="text-base" />
					<span className="text-base">{'GOOGLE'}</span>
				</div>
			</div>

			<div className="divide-black"></div>

			{/* THIRD ROW */}
			<div className="box-border py-px px-0">
				<div className="box-border flex items-center justify-between mb-2">
					<div className="text-sm text-gray-400">Who's viewed your profile</div>
					<div className="font-bold text-gray-900">{123}</div>
				</div>
				<div className="box-border flex justify-between items-center">
					<div className="text-sm text-gray-400">Impressions of your post</div>
					<div className="font-bold text-gray-900">{56}</div>
				</div>
			</div>

			<div className="divide-black"></div>

			{/* FOURTH ROW */}
			<div className="box-border py-px px-0">
				<div className="text-sm text-gray-950 font-semibold mb-4">
					Social Profiles
				</div>

				<div className="box-border flex justify-between items-center gap-4 mb-2">
					<div className="box-border flex justify-between items-center gap-4">
						<Twitter className="text-xl" />
						<div className="box-border">
							<div className="font-semibold">Twitter</div>
							<div className="text-gray-800">Social Network</div>
						</div>
					</div>
					<Pencil />
				</div>

				<div className="box-border flex justify-between items-center gap-4">
					<div className="box-border flex justify-between items-center gap-4">
						<Linkedin className="text-xl" />
						<div className="box-border">
							<div className="font-semibold">Linkedin</div>
							<div className="text-gray-800">Network Platform</div>
						</div>
					</div>
					<Pencil />
				</div>
			</div>
		</div>
	);
};

export default UserWidget;

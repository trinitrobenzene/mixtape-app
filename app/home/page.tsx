import Row from '@/components/Home/Row';
import React from 'react';

function Home() {
	return (
		<div>
			{[1, 2].map((e, i) => (
				<Row key={i} />
			))}
		</div>
	);
}

export default Home;

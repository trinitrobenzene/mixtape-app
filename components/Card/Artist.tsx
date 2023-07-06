'use client';
import Link from 'next/link';
import style from '@/src/styles/card.module.scss';

interface props {
    name: string;
    description: string;
    href: string;
}

const Artist = ({ name, href, description }: props) => {
    return (
        <Link className={style.card} href={href} shallow>
            <div className="bg-green-200 rounded-full w-[144px] h-[144px]"></div>
            <div className="mt-4">
                <p className="font-semibold">{name}</p>
                <p className="text-sm">{description}</p>
            </div>
        </Link>
    );
};

export default Artist;

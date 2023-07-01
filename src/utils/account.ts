import { NOTIFICATION_TYPE, Store } from 'react-notifications-component';

interface eProps {
    title: string;
    message: string;
    type?: NOTIFICATION_TYPE;
    time?: number;
}

export const Notice = (props: eProps) => {
    Store.addNotification({
        title: props.title,
        message: props.message,
        type: props.type ?? 'info',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__fadeOut'],
        dismiss: {
            duration: props.time ?? 1200,
            onScreen: true,
        },
    });
};

export const hideElements = () => {
    const main = document.querySelector('main');

    main?.classList.remove('active');
    main?.classList.remove('expand');

    document.querySelector('nav')?.classList.add('opacity-0');
    document.querySelector('#playbar')?.classList.add('opacity-0');
    document.querySelector('header')?.classList.add('opacity-0');
};

export const showElements = () => {
    const main = document.querySelector('main');
    main?.classList.add('active');
    main?.classList.remove('expand');

    document.querySelector('nav')?.classList.remove('opacity-0');
    document.querySelector('#playbar')?.classList.remove('opacity-0');
    document.querySelector('header')?.classList.remove('opacity-0');
};

import './style.css';

const canvas = document.createElement('canvas');

canvas.width = 640;
canvas.height = 480;

const ctx = canvas.getContext('2d');

document.body.appendChild(canvas);
Object.assign(document.body.style, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});
import NotFoundImage from '../../img/404StatusCode.png';

export default function NotFound404() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Oops! You seem to be lost.</h1>
      <img
        src={NotFoundImage}
        alt="404 Error"
        width={1200}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}

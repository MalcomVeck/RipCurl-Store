import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div>
        <Spinner className='position-relative top-50 start-50 mt-3'  animation="border" size='xxl' variant='dark'/>
    </div>
  )
}

export default Loader
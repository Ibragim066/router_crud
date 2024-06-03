// react router
import { NavLink } from 'react-router-dom';

// bootstrap elements
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// hooks
import useJsonFetch from '../hooks/useJsonFetch';

// other
import moment from 'moment/moment';

function Posts() {
  const { data } = useJsonFetch('http://localhost:7070/posts', { method: 'GET' });
  
  return (
    <>
      {data?.map(elem =>
        <Card style={{ width: '100%' }} className='mt-2' key={elem.id}> 
          <NavLink className='text-decoration-none' to={`/posts/${elem.id}`}>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center' >
              <Card.Title className='text-uppercase'>Ibragim</Card.Title>
              <Card.Text>
                Student
              </Card.Text>
            </Card.Body>
          </NavLink>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text className='text-center'>
                {moment(elem.created).startOf('minute').fromNow()}
              </Card.Text>
              <Card.Text className='fs-4 text-center'>
                {elem.text}
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-center'>
              <Button variant='success' className='me-2'>Нравится</Button>
              <Button variant='warning' className='me-2'>Комментировать</Button>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <InputGroup>
              <Form.Control
                placeholder='Напишите комментарий'
                aria-label='Напишите комментарий'
                aria-describedby='button-add-message'
              />
              <Button variant='outline-primary' id='button-add-message'>
                Отправить
              </Button>
            </InputGroup>
          </Card.Body>
        </Card>
      )}
      <br />
    </>
  );
}

export default Posts;
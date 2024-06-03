// react router
import { useNavigate } from 'react-router-dom';

// react
import { useState } from 'react';

// bootstrap component
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

// other
import iziToast from 'izitoast';

function Newpost() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    text: '',
  });

  const handleFormChange = ({ target }) => {
    let { name, value } = target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const sendNewPost = await fetch('http://localhost:7070/posts', {
      method: 'POST',
      body: JSON.stringify({ text: form.text }),
    });

    if (sendNewPost.status !== 204) {
      iziToast.error({
        message: 'Произошла ошибка при добавлении!',
        position: 'bottomCenter',
      });
    } else {
      iziToast.success({
        message: 'Вы успешно добавили пост!',
        position: 'bottomCenter',
      });
      form.text = '';
      setForm(prevForm => ({ ...prevForm }));

      navigate('/');
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3 mt-2'>
        <Form.Label>Введите текст поста</Form.Label>
        <InputGroup>
          <Form.Control
            placeholder='Введите текст поста'
            aria-label='Введите текст поста'
            aria-describedby='button-add-post'
            name='text'
            value={form.text}
            onChange={handleFormChange}
            required
          />
          <Button type='submit' variant='outline-primary' id='button-add-post'>
            Отправить
          </Button>
        </InputGroup>
        <br />
      </Form.Group>
    </Form>
  );
}

export default Newpost;
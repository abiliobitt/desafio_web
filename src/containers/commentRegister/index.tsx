import { FC, SyntheticEvent, useState } from 'react'
import ModalBox from '../../components/modalBox'
import {HeadingM, BodyM, Button} from 'web-components'
import logo from '../../serasa-logo-full.svg';
import { Container, FormContainer } from './styles';
import StarRate from '../../components/starRate';

interface IForm {
  name?: string
  comment?: string
}

const defaultValues = { name: '', comment: ''}

const CommentRegister : FC = () => {
  const [rate, setRate] = useState(0)
  const [formInfos, setFormInfos] = useState<IForm>(defaultValues)

  const setRating = (rate: number) => {
    setRate(rate)
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    setFormInfos({[event.currentTarget.name]: event.currentTarget.value})
  }
  return (
    <ModalBox>
      <Container>
       <img src={logo} alt="logotipo" />
      <HeadingM className='title'>Conte o quanto você está satisfeito com nossos serviços</HeadingM>
      <FormContainer>
      <BodyM bold> Marque de 1 à 5 estrelas</BodyM>
        <StarRate rate={rate} setRate={setRating} />
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name='name'
          onChange={(e) => handleChange(e)}
          value={formInfos['name']}
        />
        <label htmlFor="comment">Comentário(Opcional)</label>
        <textarea
          name="comment"
          onChange={(e) => handleChange(e)}
          value={formInfos['comment']}
        />
        <Button>Enviar avaliação</Button>
      </FormContainer>
      </Container>
    </ModalBox>
  )
}

export default CommentRegister
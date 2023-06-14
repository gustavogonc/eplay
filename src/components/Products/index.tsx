import { Tag } from '../Tag'

import { Card, Descricao, Titulo, Infos } from './style'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

export const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)
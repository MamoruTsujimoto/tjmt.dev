import styled from '@emotion/styled'
import { FC } from 'react'
import { TagType } from 'types/notion'
import styles from 'utils/styles'

type TagProps = {
  tags: TagType[]
}

const Tags: FC<TagProps> = ({ tags }) => {
  return (
    <>
      <Block>
        {tags.map((tag) => (
          <Icon key={tag.id}>
            <i className={`devicon-${tag.name}-original colored`} />
          </Icon>
        ))}
      </Block>
    </>
  )
}

const Block = styled.div`
  margin: 0 10px 0 0;
`

const Icon = styled.span`
  /* display: inline-flex;
  justify-content: center;
  align-items: center; */
  margin: 0;
  /* padding: 4px;
  border: 1px solid #000;
  border-radius: 50%; */

  ${styles.mixins.fontSize(20, 20)}
`

export default Tags

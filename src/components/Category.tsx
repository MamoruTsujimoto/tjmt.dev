import styled from '@emotion/styled'
import { FC } from 'react'
import { CategoryType } from 'types/notion'
import styles from 'utils/styles'

type CategoryProps = {
  cat: CategoryType
}

const Category: FC<CategoryProps> = ({ cat }) => {
  return (
    <>
      <Block>
        <Icon key={cat.id}>
          {cat.name === 'wordpress' ? (
            <i className={`devicon-${cat.name}-plain colored`} />
          ) : (
            <i className={`devicon-${cat.name}-original colored`} />
          )}
        </Icon>
      </Block>
    </>
  )
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 10px;
  background: ${styles.colors.primary};
`

const Icon = styled.span`
  display: inline-flex;
  margin: 0;
  ${styles.mixins.fontSize(80, 80)}
`

export default Category

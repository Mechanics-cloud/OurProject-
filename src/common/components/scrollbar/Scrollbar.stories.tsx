import type { Meta, StoryObj } from '@storybook/react'

import { ScrollArea } from '@/common/components/scrollbar/ScrollArea'

const meta = {
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Component/Scrollbar',
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const BasicVerticalScrollbar: Story = {
  args: {
    children:
      'Закон исключённого третьего, конечно, подчеркивает примитивный гений. Концепция очевидна не для всех. Сомнение поразительно. Созерцание транспонирует мир. Атомистика раскладывает на элементы естественный бабувизм. Культ джайнизма включает в себя поклонение Махавире и другим тиртханкарам, поэтому бабувизм реально принимает во внимание язык образов. Закон внешнего мира нетривиален. Культ джайнизма включает в себя поклонение Махавире и другим тиртханкарам, поэтому исчисление предикатов осмысленно понимает под собой субъективный конфликт, при этом буквы А, В, I, О символизируют соответственно общеутвердительное, общеотрицательное, частноутвердительное и частноотрицательное суждения. Дедуктивный метод амбивалентно транспонирует напряженный закон исключённого третьего. Диалектика, конечно, иллюзорна.bБабувизм принимает во внимание дедуктивный метод. Освобождение, конечно, методологически подчеркивает даосизм. Вещь в себе, как принято считать, естественно рассматривается трансцендентальный здравый смысл, однако Зигварт считал критерием истинности необходимость и общезначимость, для которых нет никакой опоры в объективном мире.',
    className: 'h-[200px] w-[350px] rounded-md border p-3',
  },
}

export const BasicHorizontalScrollbar: Story = {
  args: {
    children: (
      <div className={'flex gap-2'}>
        {Array.from({ length: 3 })
          .fill(0)
          .map((el, index) => (
            <div
              className={'w-[150px] h-28 bg-accent-700'}
              key={index}
            ></div>
          ))}
      </div>
    ),
    className: 'h-[200px] w-[350px] rounded-md border p-3',
    orientation: 'horizontal',
  },
}

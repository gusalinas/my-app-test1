import MyNabvar from './components/MyNabvar'
import { Textarea } from '@nextui-org/input'
import { Card, CardBody } from '@nextui-org/card'
import MyHeader from './components/MyHeader'

export default function Home() {
  return (
    <>
      <MyNabvar></MyNabvar>
      <MyHeader></MyHeader>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Card>
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="max-w-xs"
            />
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="max-w-xs"
            />
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="max-w-xs"
            />
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="max-w-xs"
            />
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="max-w-xs"
            />
          </CardBody>
        </Card>

      </main>
    </>

  )
}

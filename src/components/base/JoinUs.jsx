import Card from './Card';
import ContentHead from './ContentHead';
import Button from './Button';

function JoinUs({bgColor, title, body, classNameT, classNameB, buttonTitleT, buttonTitleB}) {
  return (
    <Card bgColor={bgColor}>
      <ContentHead 
        contentHead={title}
        content={body}
        text='text-white'
        textbody='text-gray-100'
      />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className={classNameT}>{buttonTitleT}</Button>
        <Button className={classNameB}>{buttonTitleB}</Button>

      </div>
    </Card>
  )
}

export default JoinUs;
function Card({bgColor = 'bg-white', children}) {
  return (
    <section className={`${bgColor} py-16`}>
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

export default Card;
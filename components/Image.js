export default ({ src, className, height, width }) => {
    return (
        <div className='image-container mx-auto'>
            <img
                src={src}
                className={className}
                height={height}
                width={width}
            />
        </div>
    )
}
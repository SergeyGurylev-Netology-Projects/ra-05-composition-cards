export type CardProps = {
    image_url?: string;
    title?: string;
    text?: string;
    button?: string;
};

export function Card(props: CardProps) {

    const renderImage = () => {
        if (props.image_url) {
            return <img src={props.image_url} className="card-img-top" alt="..."/>
        }

        return <></>;
    }

    const renderTitle = () => {
        if (props.title) {
            return <h5 className="card-title">{props.title}</h5>
        }

        return <></>;
    }

    const renderText = () => {
        if (props.text) {
            return <p className="card-text">{props.text}</p>
        }

        return <></>;
    }

    const renderButton = () => {
        if (props.button) {
            return <a href="#" className="btn btn-primary">{props.button}</a>
        }

        return <></>;
    }

    return(
        <div className="card" style={{width: "18rem"}}>
            {renderImage()}
            <div className="card-body">
                {renderTitle()}
                {renderText()}
                {renderButton()}
            </div>
        </div>
    );
}
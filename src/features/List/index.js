import { StyledList, ListItem, Span } from "./styled";
import ellipse from "./Ellipse.svg";

const List = ({contentList}) => (
    <StyledList>
        <ListItem>
            <img src={ellipse}></img>
            <Span>
                {contentList}
            </Span>
        </ListItem>
    </StyledList>
)

export default List;
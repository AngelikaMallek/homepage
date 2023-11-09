import { StyledList, ListItem, Span } from "./styled";

const List = ({contentList}) => (
    <StyledList>
        <ListItem>
            <Span>
                {contentList}
            </Span>
        </ListItem>
    </StyledList>
)

export default List;
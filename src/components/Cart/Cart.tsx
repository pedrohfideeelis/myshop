import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";

interface CartProps {
    showCart: boolean
}

export const Cart: React.FC<CartProps> = ({
    showCart
}) => {
    return (
        <S.Container showCart={showCart}>
            <S.Title>Carrinho <FiShoppingCart /> </S.Title>
        </S.Container>
    )
}
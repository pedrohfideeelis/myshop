import { useSelector } from "react-redux";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { RootReducer } from "../../redux/root-reducer";

interface CartProps {
    showCart: boolean
    setShowCart: (show: boolean) => void;
}

export const Cart: React.FC<CartProps> = ({ showCart, setShowCart }) => {
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price;
    }, 0);

    return (
        <S.Container showCart={showCart}>
            <S.HeadContainer>
                <S.Title>Carrinho <FiShoppingCart /> </S.Title>
                <S.CloseCartButton showCart={showCart} onClick={() => setShowCart(!showCart)} >Fechar</S.CloseCartButton>
            </S.HeadContainer>
            <S.CartProductsList>
                {cart.map(product => (
                    <S.CartProductItem key={product.id}>
                        {/* <S.CartProductImage>{product.image}</S.CartProductImage> */}
                        {product.title} - <strong>${product.price}</strong>
                    </S.CartProductItem>
                ))}
            </S.CartProductsList>
            <S.CartTotal>Total: ${total}</S.CartTotal>
        </S.Container>
    )
}
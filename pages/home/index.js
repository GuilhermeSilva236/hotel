import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Cabecalho from '@/components/Cabecalho';
import Pagina from '@/components/Pagina';
import { Container } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState([false, false]); // Separate state for each card

    const handleExpandClick = (index) => {
        setExpanded((prevState) => {
            const newExpanded = [...prevState];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    return (
        <>
            <Pagina></Pagina>

            <Container>
                <Row>
                    <Col>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        <img src='/img/logo.png' width='30px' height='auto' ></img>
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="América Bittar Hotel"
                                subheader="fevereiro 14, 2023"
                            />
                            <Link href='/reserva'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cf.bstatic.com/xdata/images/hotel/square600/46351559.webp?k=54d1c43bb5e0a0f71db84dee3a637cfe67d0954cef5fe7c5d5fed6178aaf2645&o="
                                    alt="Paella dish"
                                />
                            </Link>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Asa sul, 0,8 km do centro
                                    Localizado a 400 metros da Torre de Televisão de Brasília e a 1,3 km do Complexo Cultural da República, o América Bittar Hotel dispõe de quartos modernos e restaurante com café da manhã grátis.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded[0]}
                                    onClick={() => handleExpandClick(0)}
                                    aria-expanded={expanded[0]}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Informações:</Typography>
                                    <Typography paragraph>
                                        O buffet de café da manhã conta com frutas da estação, bolos diversos e produtos preparados na hora. O restaurante também serve pratos nacionais e internacionais.
                                    </Typography>
                                    <Typography paragraph>
                                        A acomodação fornece Wi-Fi grátis e fica perto de um estacionamento público grátis.
                                        O hotel fica a 2 km da Esplanada dos Ministérios. O América Bittar Hotel fica a 1 km da estação de metrô e a 14 km do Aeroporto Internacional de Brasília.
                                    </Typography>
                                    <Typography paragraph>
                                        Esta é a parte de Brasília de que os nossos hóspedes mais gostam, de acordo com avaliações independentes.
                                        América Bittar Hotel tem recebido hóspedes da Booking.com desde 19 de abr. de 2011.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Col>

                    <Col>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        <img src='/img/logo.png' width='30px' height='auto' ></img>
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Bittar Inn"
                                subheader="janeiro 14, 2023"
                            />

                            <Link href='/reserva'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cf.bstatic.com/xdata/images/hotel/square600/64057404.webp?k=e0b67773f0e5f4c6fb478a3167f8153563806baf642853349ca42ce0bcdc3d3a&o="
                                    alt="Paella dish"
                                />
                            </Link>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Asa norte, Brasília Mostrar no mapa0,7 km do centro
                                    O Bittar Inn Hotel está localizado em frente ao Brasília Shopping, com acesso fácil ao transporte público. O hotel oferece recepção 24 horas e um buffet de café da manhã regional.

                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded[1]}
                                    onClick={() => handleExpandClick(1)}
                                    aria-expanded={expanded[1]}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Informações:</Typography>
                                    <Typography paragraph>
                                        O Bittar Inn Hotel está localizado em frente ao Brasília Shopping, com acesso fácil ao transporte público. O hotel oferece recepção 24 horas e um buffet de café da manhã regional.

                                    </Typography>
                                    <Typography paragraph>

                                        Os quartoa do Bittar Inn apresentam ar-condicionado no teto, telefone e TV. Um serviço de quarto está disponível até as 23h. O Wi-Fi gratuito está à sua disposição.

                                        No Bittar Inn, você pode desfrutar de um café da manhã com suco natural, frutas da estação e uma variedade de pães e bolos.
                                    </Typography>
                                    <Typography paragraph>
                                        O Bittar Inn tem uma localização estratégica, ao lado da Via W3 Norte. O Aeroporto Internacional de Brasília está situado a 15 minutos de carro do hotel. Os ônibus executivos que saem do Aeroporto Internacional de Brasília param em um ponto de ônibus próximo ao hotel.

                                        Esta é a parte de Brasília de que os nossos hóspedes mais gostam, de acordo com avaliações independentes.

                                        Bittar Inn tem recebido hóspedes da Booking.com desde 5 de abr. de 2010.
                                        Principais comodidades
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Col>




                    <Col>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        <img src='/img/logo.png' width='30px' height='auto' ></img>
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Monumental Bittar Hotel"
                                subheader="janeiro 02, 2022"
                            />
                            <Link href='/reserva'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cf.bstatic.com/xdata/images/hotel/square600/113895713.webp?k=57611fe3fe5c9a84946c1d7edbf6b12e2d343d26fc9ae2fec30257cbca863025&o="
                                    alt="Paella dish"
                                />
                            </Link>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    O Monumental Bittar oferece quartos confortáveis e estacionamento gratuito no centro de Brasília, a 9 km do Aeroporto Presidente Juscelino Kubitschek.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded[3]}
                                    onClick={() => handleExpandClick(3)}
                                    aria-expanded={expanded[3]}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded[3]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Informações:</Typography>
                                    <Typography paragraph>
                                        Os quartos do Monumental Bittar dispõem de banheiro privativo, ar-condicionado, TV a cabo e frigobar. O Wi-Fi gratuito está à sua disposição em todas as áreas.
                                    </Typography>
                                    <Typography paragraph>

                                        Você poderá desfrutar diariamente de um café da manhã com frutas da estação, pães e ovos mexidos. O restaurante da casa serve pratos internacionais e coquetéis especiais.
                                    </Typography>
                                    <Typography paragraph>
                                        O Monumental Bittar Hotel está situado a 1 km do Shopping Conjunto Nacional e a 2 km do Banco Central do Brasil.

                                        Esta é a parte de Brasília de que os nossos hóspedes mais gostam, de acordo com avaliações independentes.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>




                <Row className='mt-5'>
                    <Col>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        <img src='/img/logo.png' width='30px' height='auto' ></img>
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="St Paul Plaza HotelAbre numa nova janela
                                "
                                subheader="Agosto 28, 2022"
                            />
                            <Link href='/reserva'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cf.bstatic.com/xdata/images/hotel/square600/441383185.webp?k=14e24229e9ec1073db5d406a3090f1f9882d9a0c07fd1eefa591e70f5688482a&o="
                                    alt="Paella dish"
                                />
                            </Link>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Com piscina ao ar livre e sauna, o St. Paul Plaza Hotel está localizado em Brasília, no Distrito Federal, a 500 metros do Shopping Conjunto Nacional. Um bar está disponível no local.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded[4]}
                                    onClick={() => handleExpandClick(4)}
                                    aria-expanded={expanded[4]}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded[4]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Informações:</Typography>
                                    <Typography paragraph>
                                        Os quartos são amplos e bem projetados, com ar-condicionado, varanda espaçosa, TV de tela plana com canais a cabo, mesa de trabalho e cofre. O St. Paul Plaza Hotel também oferece WiFi gratuito em todas as áreas.

                                    </Typography>
                                    <Typography paragraph>
                                        Você pode almoçar no restaurante Flowers, que serve uma variedade de pratos nacionais e internacionais. A propriedade tem recepção e lanchonete, ambas 24 horas.

                                    </Typography>
                                    <Typography paragraph>
                                        O Complexo Cultural da República fica a 1 km do St. Paul Plaza Hotel, bem como o Banco Central do Brasil. O Aeroporto Internacional de Brasília - Presidente Juscelino Kubitschek está a 9 km.

                                        Esta é a parte de Brasília de que os nossos hóspedes mais gostam, de acordo com avaliações independentes.

                                        St Paul Plaza Hotel tem recebido hóspedes da Booking.com desde 29 de set. de 2010.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Col>

                    <Col>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        <img src='/img/logo.png' width='30px' height='auto' ></img>
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Cancún Hotel by H Hotéis - AirportAbre numa nova janela
                                "
                                subheader="janeiro 14, 2023"
                            />
                            <Link href='/reserva'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cf.bstatic.com/xdata/images/hotel/square600/276447236.webp?k=57958c0e0d5260a7cf33b94d06752bd55c83d3ea7c1cd9bc899f724f770f8415&o="
                                    alt="Paella dish"
                                />
                            </Link>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Situado em Brasília, a 20 km do Banco Central do Brasil, o Cancún Hotel by H Hotéis - Airport oferece acomodações com academia, estacionamento privativo gratuito, lounge compartilhado e restaurante.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded[5]}
                                    onClick={() => handleExpandClick(5)}
                                    aria-expanded={expanded[5]}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded[5]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Informações:</Typography>
                                    <Typography paragraph>
                                        Você pode desfrutar de um café da manhã em estilo buffet ou continental.


                                    </Typography>
                                    <Typography paragraph>

                                        O Cancún Hotel by H Hotéis - Airport oferece acomodações 4 estrelas com centro de spa.
                                    </Typography>
                                    <Typography paragraph>
                                        A acomodação fica a 20 km do Supremo Tribunal de Justiça do Brasil e do Complexo Cultural da República. O aeroporto mais próximo é o Aeroporto Internacional Presidente Juscelino Kubitschek - Brasília, a 12 km do Cancún Hotel by H Hotéis - Airport.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Col>




                    <Col>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        <img src='/img/logo.png' width='30px' height='auto' ></img>
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="
                                Bay Park Hotel ResortAbre numa nova janela
                                "
                                subheader="Março 02, 2023"
                            />
                            <Link href='/reserva'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cf.bstatic.com/xdata/images/hotel/square600/53955177.webp?k=612f0c26239146db33732785ff488a3af87208faf4eab03e9b57d87232abc4cb&o="
                                    alt="Paella dish"
                                />
                            </Link>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    O Bay Park Hotel Resort está localizado próximo ao Lago Paranoá, a 10 minutos de carro do centro da cidade de Brasília. O estabelecimento oferece estacionamento gratuito e buffet de café-da-manhã.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded[6]}
                                    onClick={() => handleExpandClick(6)}
                                    aria-expanded={expanded[6]}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded[6]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Informações:</Typography>
                                    <Typography paragraph>
                                        Os quartos espaçosos e confortáveis do Bay Park estão bem-equipados com ar-condicionado e internet.
                                    </Typography>
                                    <Typography paragraph>

                                        O Aeroporto Presidente Juscelino Kubitschek fica a 11 km da propriedade.
                                    </Typography>
                                    <Typography paragraph>
                                        Bay Park Hotel Resort tem recebido hóspedes da Booking.com desde 29 de jan. de 2010.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </>
    );
}

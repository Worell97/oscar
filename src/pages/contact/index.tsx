import React from 'react';
import {Content, Grid, SocialMediaPicture, SocialMedia, CustomList, CustomItem, CustomLink} from './styles';
import TwitterIcon from '../../assets/twitter-ico.png';
import FaceIcon from '../../assets/facebook-ico.png';
import LinkedinIcon from '../../assets/linkedin-ico.png';
import Section from '../../components/section';

function Contact(){
    return(
        <Section elementName="Contact" HeaderText='' customstyle="height: 40%; background-color: var(--black);">
        <Grid>
            <Content>
                <CustomList>
                    <CustomItem><CustomLink href="mailto:worell-oscar@hotmail.com.br">Email</CustomLink></CustomItem>
                    <CustomItem><CustomLink href="https://www.linkedin.com/in/oscar-worell-5740ab139/">Likedin</CustomLink></CustomItem>                
                    <CustomItem><CustomLink href="http://api.whatsapp.com/send?phone=+5545998543680">WhatsApp</CustomLink></CustomItem>
                </CustomList>
            </Content>
            <SocialMedia>
                <a href="https://twitter.com/OscarWorell"><SocialMediaPicture src={FaceIcon} alt="Facebook"/></a>
                <a href="https://www.linkedin.com/in/oscar-worell-5740ab139/"><SocialMediaPicture src={LinkedinIcon} alt="Likedin"/></a>
                <a href="https://twitter.com/OscarWorell"><SocialMediaPicture src={TwitterIcon} alt="Twitter"/></a>             
            </SocialMedia>
        </Grid>
        </Section>
    );
}

export default Contact;
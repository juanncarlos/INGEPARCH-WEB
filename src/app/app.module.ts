import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Para el error 404 (solución) */
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FormularioContactoComponent } from './components/shared/formulario-contacto/formulario-contacto.component';
import { TriaxialComponent } from './components/servicios/triaxial/triaxial.component';
import { CorteDirectoComponent } from './components/servicios/corte-directo/corte-directo.component';
import { PruebaCbrComponent } from './components/servicios/prueba-cbr/prueba-cbr.component';
import { RupturaProvetasComponent } from './components/servicios/ruptura-provetas/ruptura-provetas.component';
import { ElaboracionExpedienteComponent } from './components/servicios/elaboracion-expediente/elaboracion-expediente.component';
import { LiquidacionObrasComponent } from './components/servicios/liquidacion-obras/liquidacion-obras.component';
import { ConsultoriaComponent } from './components/consultoria/consultoria.component';
import { ObrasCivilesComponent } from './components/obras-civiles/obras-civiles.component';
import { GeotecniaComponent } from './components/consultoria/geotecnia/geotecnia.component';
import { EstructuralComponent } from './components/consultoria/estructural/estructural.component';
import { ArquitecturaComponent } from './components/consultoria/arquitectura/arquitectura.component';
import { SistemasEInformaticaComponent } from './components/consultoria/sistemas-e-informatica/sistemas-e-informatica.component';
import { PuentesComponent } from './components/obras-civiles/puentes/puentes.component';
import { CarreterasComponent } from './components/obras-civiles/carreteras/carreteras.component';
import { EdificacionesComponent } from './components/obras-civiles/edificaciones/edificaciones.component';
import { EnsayoTriaxialComponent } from './components/consultoria/geotecnia/ensayo-triaxial/ensayo-triaxial.component';
import { ProctorStandardComponent } from './components/consultoria/geotecnia/proctor-standard/proctor-standard.component';
import { ProctorModificadoComponent } from './components/consultoria/geotecnia/proctor-modificado/proctor-modificado.component';
import { ContenidoHumedadComponent } from './components/consultoria/geotecnia/contenido-humedad/contenido-humedad.component';
import { PesoVolumetricoSueloCohesivoComponent } from './components/consultoria/geotecnia/peso-volumetrico-suelo-cohesivo/peso-volumetrico-suelo-cohesivo.component';
import { AnalisisGranulometricoTamizadoComponent } from './components/consultoria/geotecnia/analisis-granulometrico-tamizado/analisis-granulometrico-tamizado.component';
import { GravedadEspecificaSolidosComponent } from './components/consultoria/geotecnia/gravedad-especifica-solidos/gravedad-especifica-solidos.component';
import { LimiteLiquidoPlasticoIndicePlasticoComponent } from './components/consultoria/geotecnia/limite-liquido-plastico-indice-plastico/limite-liquido-plastico-indice-plastico.component';
import { LimiteContraccionComponent } from './components/consultoria/geotecnia/limite-contraccion/limite-contraccion.component';
import { CbrComponent } from './components/consultoria/geotecnia/cbr/cbr.component';
import { ServiciosGeotecniaComponent } from './components/consultoria/geotecnia/servicios-geotecnia/servicios-geotecnia.component';
import { ServiciosSistemasComponent } from './components/consultoria/sistemas-e-informatica/servicios-sistemas/servicios-sistemas.component';
import { SitioWebComponent } from './components/consultoria/sistemas-e-informatica/servicios-sistemas/sitio-web/sitio-web.component';
import { SoporteTecnicoComponent } from './components/consultoria/sistemas-e-informatica/servicios-sistemas/soporte-tecnico/soporte-tecnico.component';
import { TicComponent } from './components/consultoria/sistemas-e-informatica/servicios-sistemas/tic/tic.component';
import { DesarrolloSoftwareComponent } from './components/consultoria/sistemas-e-informatica/servicios-sistemas/desarrollo-software/desarrollo-software.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    ServiciosComponent,
    FormularioContactoComponent,
    TriaxialComponent,
    CorteDirectoComponent,
    PruebaCbrComponent,
    RupturaProvetasComponent,
    ElaboracionExpedienteComponent,
    LiquidacionObrasComponent,
    ConsultoriaComponent,
    ObrasCivilesComponent,
    GeotecniaComponent,
    EstructuralComponent,
    ArquitecturaComponent,
    SistemasEInformaticaComponent,
    PuentesComponent,
    CarreterasComponent,
    EdificacionesComponent,
    EnsayoTriaxialComponent,
    ProctorStandardComponent,
    ProctorModificadoComponent,
    ContenidoHumedadComponent,
    PesoVolumetricoSueloCohesivoComponent,
    AnalisisGranulometricoTamizadoComponent,
    GravedadEspecificaSolidosComponent,
    LimiteLiquidoPlasticoIndicePlasticoComponent,
    LimiteContraccionComponent,
    CbrComponent,
    ServiciosGeotecniaComponent,
    ServiciosSistemasComponent,
    SitioWebComponent,
    SoporteTecnicoComponent,
    TicComponent,
    DesarrolloSoftwareComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

<?php

class Program
{
    public function run(SvgRenderer $renderer)
    {
        
        // Création et initialisation d'un cercle.
        $circle1 = new Circle();
        $circle1->setLocation(6, 6);
        $circle1->setColor('cornflowerblue');
		$circle1->setOpacity(1);
        $circle1->setRadius(5);

        // Ajout des différents objets géométriques au moteur graphique.
        $renderer->addShape($circle1);
        
		// Exécution du moteur graphique.
        $renderer->run();
    }
}
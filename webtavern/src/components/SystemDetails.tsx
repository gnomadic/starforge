"use client";


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GameSystem } from '@/domain/systems';

interface SystemDetailProps {
    system: GameSystem;
}

const SystemDetails: React.FC<SystemDetailProps> = ({ system }) => {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg flex items-center justify-center text-4xl" style={{ backgroundColor: `${system.color}20` }}>
                    {system.icon}
                </div>
                <div>
                    <h2 className="text-3xl font-bold">{system.name}</h2>
                    <p className="text-lg text-muted-foreground">{system.description}</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4">System Functions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {system.functions.map((func, index) => (
                        <Card key={index} className="bg-card/50">
                            <CardHeader>
                                <CardTitle className="text-primary">{func.name}</CardTitle>
                                <CardDescription>{func.description}</CardDescription>
                            </CardHeader>
                            {func.parameters && func.parameters.length > 0 && (
                                <CardContent>
                                    <h4 className="text-sm font-medium mb-2">Parameters:</h4>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        {func.parameters.map((param, idx) => (
                                            <li key={idx} className="font-mono">{param}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            )}
                        </Card>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-card/50 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Implementation Example</h3>
                <pre className="bg-background p-4 rounded-md overflow-auto text-sm">
                    <code className="text-primary-foreground">
                        {`// Example code for ${system.name}
import { ${system.id.charAt(0).toUpperCase() + system.id.slice(1)} } from 'rpg-maker-studio';

// Initialize the system
const ${system.id}System = new ${system.id.charAt(0).toUpperCase() + system.id.slice(1)}();

// Configure using helper functions
${system.functions[0].name}(${system.functions[0].parameters ? system.functions[0].parameters[0].split(':')[0] : ''});

// Add to your game
game.addSystem(${system.id}System);`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default SystemDetails;